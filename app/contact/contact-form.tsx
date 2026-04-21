"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { SITE } from "@/config/site";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      const html = `
        <h2>Website contact</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;border:1px solid #dee2e6;"><strong>Name</strong></td><td style="padding:8px;border:1px solid #dee2e6;">${data.name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #dee2e6;"><strong>Email</strong></td><td style="padding:8px;border:1px solid #dee2e6;">${data.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #dee2e6;"><strong>Phone</strong></td><td style="padding:8px;border:1px solid #dee2e6;">${data.phone || "—"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #dee2e6;"><strong>Message</strong></td><td style="padding:8px;border:1px solid #dee2e6;">${data.message}</td></tr>
        </table>`;
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone ?? "");
      formData.append("message", data.message);
      formData.append("_subject", `Contact form: ${data.name}`);
      formData.append("_template", "box");
      formData.append("_captcha", "false");
      formData.append("_html", html);

      const response = await fetch(
        `https://formsubmit.co/ajax/${SITE.email}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Submission failed");

      toast({
        title: "Message sent",
        description: "We will get back to you shortly.",
        duration: 5000,
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Could not send",
        description: "Please try again or reach us on WhatsApp.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="layout-container">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-8">
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <Phone className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display font-semibold">Phone</h3>
                  <p className="text-muted-foreground">{SITE.phoneDisplay}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <Mail className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display font-semibold">Email</h3>
                  <p className="text-muted-foreground break-all">{SITE.email}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <MapPin className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display font-semibold">Address</h3>
                  <p className="text-muted-foreground">
                    {SITE.addressLine}, {SITE.city}, {SITE.country}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        {...form.register("name")}
                        autoComplete="name"
                      />
                      {form.formState.errors.name && (
                        <p className="text-sm text-destructive mt-1">
                          {form.formState.errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...form.register("email")}
                        autoComplete="email"
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-destructive mt-1">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone (optional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      {...form.register("phone")}
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      {...form.register("message")}
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full min-h-12 touch-manipulation"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
