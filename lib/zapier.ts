/**
 * Zapier Webhook Integration (OPTIONAL)
 * 
 * This file provides utilities for sending form data to Zapier webhooks.
 * Currently COMMENTED OUT by default.
 * 
 * TO ENABLE:
 * 1. Uncomment the sendToZapier function calls in your API routes
 * 2. Add your Zapier webhook URLs to .env.local:
 *    - ZAPIER_CONTACT_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_ID
 *    - ZAPIER_VALUATION_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_ID
 * 
 * ZAPIER USE CASES:
 * - Add leads to CRM (Salesforce, HubSpot, Pipedrive, etc.)
 * - Save to Google Sheets for tracking
 * - Send notifications to Slack/Teams
 * - Add contacts to email marketing (Mailchimp, ConvertKit, etc.)
 * - Create tasks in project management tools
 * - Trigger custom workflows
 */

export interface ZapierPayload {
  formType: 'contact' | 'home-valuation';
  timestamp: string;
  data: any;
}

/**
 * Send data to Zapier webhook
 * CURRENTLY COMMENTED OUT - See API routes for implementation
 */
export async function sendToZapier(
  webhookUrl: string,
  payload: ZapierPayload
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Zapier webhook failed: ${response.statusText}`);
    }

    return { success: true };
  } catch (error: any) {
    console.error('Zapier webhook error:', error);
    // Don't throw - we don't want Zapier failures to break the form submission
    return { success: false, error: error.message };
  }
}

/**
 * Send Contact Form data to Zapier
 * UNCOMMENT THIS in your API route to enable
 */
export async function sendContactFormToZapier(formData: any) {
  const webhookUrl = process.env.ZAPIER_CONTACT_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.log('Zapier webhook URL not configured for contact form');
    return { success: false, error: 'Webhook URL not configured' };
  }

  const payload: ZapierPayload = {
    formType: 'contact',
    timestamp: new Date().toISOString(),
    data: formData,
  };

  return await sendToZapier(webhookUrl, payload);
}

/**
 * Send Home Valuation data to Zapier
 * UNCOMMENT THIS in your API route to enable
 */
export async function sendHomeValuationToZapier(formData: any) {
  const webhookUrl = process.env.ZAPIER_VALUATION_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.log('Zapier webhook URL not configured for home valuation');
    return { success: false, error: 'Webhook URL not configured' };
  }

  const payload: ZapierPayload = {
    formType: 'home-valuation',
    timestamp: new Date().toISOString(),
    data: formData,
  };

  return await sendToZapier(webhookUrl, payload);
}

/**
 * EXAMPLE: How to set up a Zap
 * 
 * 1. Go to zapier.com and create a new Zap
 * 2. Choose "Webhooks by Zapier" as trigger
 * 3. Select "Catch Hook"
 * 4. Copy the webhook URL provided
 * 5. Add it to your .env.local file
 * 6. Test the webhook by submitting a form
 * 7. Continue setting up your Zap actions (add to CRM, send email, etc.)
 * 
 * EXAMPLE ZAP WORKFLOWS:
 * 
 * Contact Form → Add to Google Sheets + Send Slack notification
 * Home Valuation → Add to HubSpot CRM + Create Google Calendar event
 * Contact Form → Add to Mailchimp + Send SMS via Twilio
 */


