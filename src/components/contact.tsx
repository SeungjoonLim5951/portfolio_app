export function Contact() {
  return (
    <section id="contact" className="container py-16 sm:py-32">
      <h2 className="text-2xl font-bold tracking-tight text-center sm:text-4xl">
        Get in Touch
      </h2>
      <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p className="mt-4 text-muted-foreground">
            Feel free to reach out to me for any inquiries or collaboration
            opportunities.
          </p>
          <div className="mt-6 space-y-4">
            <p>
              <strong>Email:</strong> your.email@example.com
            </p>
            <p>
              <strong>LinkedIn:</strong> linkedin.com/in/yourprofile
            </p>
            <p>
              <strong>GitHub:</strong> github.com/yourusername
            </p>
          </div>
        </div>
        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 mt-1 border rounded-md"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 mt-1 border rounded-md"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 mt-1 border rounded-md"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 