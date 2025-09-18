import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone, service, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { firstName, lastName, email, phone, service });

    // Send email to shop owner
    const emailResponse = await resend.emails.send({
      from: "Perfect Home's Contact <onboarding@resend.dev>",
      to: ["tharaneetharanss@gmail.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="display: inline-block; background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; width: 60px; height: 60px; border-radius: 10px; line-height: 60px; font-weight: bold; font-size: 24px; margin-bottom: 10px;">
                SS
              </div>
              <h2 style="color: #1e40af; margin: 0;">Perfect Home's / Interiors & Solutions</h2>
              <p style="color: #6b7280; margin: 5px 0;">New Contact Form Submission</p>
            </div>

            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #374151; margin-top: 0;">Customer Information</h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
                <div>
                  <strong style="color: #4b5563;">Name:</strong><br>
                  <span style="color: #111827;">${firstName} ${lastName}</span>
                </div>
                <div>
                  <strong style="color: #4b5563;">Email:</strong><br>
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </div>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <strong style="color: #4b5563;">Phone:</strong><br>
                  <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                </div>
                <div>
                  <strong style="color: #4b5563;">Service Interest:</strong><br>
                  <span style="color: #111827;">${service || 'Not specified'}</span>
                </div>
              </div>
            </div>

            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
              <h3 style="color: #374151; margin-top: 0;">Project Description</h3>
              <p style="color: #111827; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 30px; padding: 20px; background-color: #ecfccb; border-radius: 8px; border-left: 4px solid #65a30d;">
              <p style="margin: 0; color: #365314; font-weight: 500;">
                💡 <strong>Action Required:</strong> Please respond to this customer inquiry within 24 hours for the best customer experience.
              </p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                This email was sent from your website contact form.<br>
                Time: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully to shop owner:", emailResponse);

    // Send confirmation email to customer
    const confirmationResponse = await resend.emails.send({
      from: "Perfect Home's <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Perfect Home's!",
      html: `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="display: inline-block; background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; width: 60px; height: 60px; border-radius: 10px; line-height: 60px; font-weight: bold; font-size: 24px; margin-bottom: 10px;">
                SS
              </div>
              <h2 style="color: #1e40af; margin: 0;">Perfect Home's / Interiors & Solutions</h2>
            </div>

            <h1 style="color: #1e40af; text-align: center; margin-bottom: 20px;">Thank You, ${firstName}!</h1>
            
            <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
              We have received your message and will get back to you within 24 hours. Our team is excited to help you transform your space!
            </p>

            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">What happens next?</h3>
              <ul style="color: #4b5563; line-height: 1.6; padding-left: 20px;">
                <li>Our team will review your project details</li>
                <li>We'll contact you within 24 hours to discuss your needs</li>
                <li>Schedule a free consultation if needed</li>
                <li>Provide you with a customized solution and quote</li>
              </ul>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #6b7280; margin-bottom: 20px;">Questions? Feel free to call us:</p>
              <p style="color: #1e40af; font-size: 18px; font-weight: bold; margin: 0;">
                📞 +1 (555) 123-4567
              </p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Best regards,<br>
                <strong>The Perfect Home's Team</strong><br>
                Interiors & Solutions
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent to customer:", confirmationResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Emails sent successfully" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);