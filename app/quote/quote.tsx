"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { quoteServices } from "@/config/quote-services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const services = quoteServices;

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  location: z.string().min(2, "Please enter your location"),
  service: z.enum(services, {
    required_error: "Please select a service",
  }),
  details: z.string().optional(),
});

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      details: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();

      // Create an HTML email template
      const emailTemplate = `
        <h2>New Quote Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background-color: #f8f9fa;">
            <th style="padding: 12px; text-align: left; border: 1px solid #dee2e6;">Field</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #dee2e6;">Information</th>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #dee2e6;"><strong>Name</strong></td>
            <td style="padding: 12px; border: 1px solid #dee2e6;">${
              data.name
            }</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #dee2e6;"><strong>Email</strong></td>
            <td style="padding: 12px; border: 1px solid #dee2e6;">${
              data.email
            }</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #dee2e6;"><strong>Phone</strong></td>
            <td style="padding: 12px; border: 1px solid #dee2e6;">${
              data.phone
            }</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #dee2e6;"><strong>Location</strong></td>
            <td style="padding: 12px; border: 1px solid #dee2e6;">${
              data.location
            }</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #dee2e6;"><strong>Service Requested</strong></td>
            <td style="padding: 12px; border: 1px solid #dee2e6;">${
              data.service
            }</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #dee2e6;"><strong>Additional Details</strong></td>
            <td style="padding: 12px; border: 1px solid #dee2e6;">${
              data.details || "No additional details provided"
            }</td>
          </tr>
        </table>
      `;

      // Add all form data
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      // Add email template and configuration
      formData.append("_template", "box");
      formData.append("_subject", `New Quote Request from ${data.name}`);
      formData.append("_captcha", "false");
      formData.append("_html", emailTemplate);

      const response = await fetch(
        "https://formsubmit.co/ajax/qatarfurnituredecor@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Submission failed");

      toast({
        title: "Quote Request Sent",
        description: "We'll get back to you as soon as possible!",
        duration: 5000,
      });

      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description:
          "There was a problem sending your request. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 px-1">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Get a free quote
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Choose moving, packing, or an interior service — add your locations
            and dates. We&apos;ll respond with next steps.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Contact Information */}
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    {...form.register("name")}
                    placeholder="Your name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="your.email@example.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...form.register("phone")}
                    placeholder="Your phone number"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    {...form.register("location")}
                    placeholder="Your address in Qatar"
                  />
                  {form.formState.errors.location && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.location.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Selection */}
              <div className="grid gap-2">
                <Label>Select Service</Label>
                <Select
                  onValueChange={(value) =>
                    form.setValue("service", value as (typeof services)[number])
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.service && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.service.message}
                  </p>
                )}
              </div>

              {/* Additional Details */}
              <div className="grid gap-2">
                <Label htmlFor="details">Additional Details (Optional)</Label>
                <Textarea
                  id="details"
                  {...form.register("details")}
                  placeholder="Please provide any specific requirements or questions..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  "Request Quote"
                )}
              </Button>

              {/* Hidden fields for FormSubmit configuration */}
              <input
                type="hidden"
                name="_subject"
                value="New Quote Request from Website"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
