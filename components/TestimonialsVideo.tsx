'use client';

import { VideoPlayer } from './VideoPlayer';
import { VideoSchema } from './VideoSchema';

const testimonials = [
  {
    id: 1,
    src: '/videos/testimonial-1.mp4',
    title: 'Customer Testimonial - Qatar Interior Design',
    description: 'See what our customers say about our cabinet, kitchen, and furniture services',
  },
  {
    id: 2,
    src: '/videos/testimonial-2.mp4',
    title: 'Customer Testimonial - Doha Interiors',
    description: 'Real customer feedback on custom wardrobes and fit-outs in Qatar',
  },
  {
    id: 3,
    src: '/videos/testimonial-3.mp4',
    title: 'Customer Testimonial - Furniture & Curtains',
    description: 'Customer review of our curtains, sofas, and flooring services',
  },
];

export function TestimonialsVideo() {
  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Testimonials</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              See what our customers say about our cabinet, kitchen, wardrobe, curtains, sofa, and furniture moving services in Qatar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <article key={testimonial.id} className="rounded-lg overflow-hidden shadow-lg">
                <VideoPlayer
                  src={testimonial.src}
                  title={testimonial.title}
                  className="aspect-video"
                />
                <div className="p-3 bg-muted">
                  <h3 className="font-semibold text-sm">{testimonial.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <VideoSchema />
    </>
  );
}
