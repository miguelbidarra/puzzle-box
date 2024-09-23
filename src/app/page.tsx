"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-primary text-white p-4">
        <Image
          src="/misterybox1.png"
          alt="PuzzleBox"
          width={200}
          height={200}
          className="mb-6"
        />
        <h1 className="text-5xl font-bold">Welcome to PuzzleBox</h1>
        <p className="mt-4 text-lg">
          Get a unique 3D-printed puzzle delivered to your door every month!
        </p>
        <button className="mt-6 bg-accent text-white font-semibold py-3 px-6 rounded-full hover:bg-red-700 transition-all">
          I want a puzzle
        </button>
      </section>

      {/* Reasons */}
      <section className="py-20 text-center bg-background">
        <h2 className="text-4xl font-semibold mb-8">Why Choose PuzzleBox?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Unique Designs</h3>
            <p>
              Each puzzle is designed by our creative team to provide a fresh
              challenge every month.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">High-Quality Prints</h3>
            <p>
              3D-printed using the latest technology to ensure precision and
              durability.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Delivered to Your Door</h3>
            <p>
              Convenient monthly deliveries so you always have something new to
              solve.
            </p>
          </div>
        </div>
      </section>


      {/* Pricing */}
      <section className="py-20 bg-secondary text-center">
        <h2 className="text-4xl font-semibold mb-8">Affordable Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
            <p className="text-lg">$19.99/month</p>
            <p>1 puzzle delivered every month</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
            <p className="text-lg">$29.99/month</p>
            <p>1 puzzle + bonus gift every month</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Annual Plan</h3>
            <p className="text-lg">$199.99/year</p>
            <p>Save more with an annual subscription</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 text-center bg-background">
        <h2 className="text-4xl font-semibold mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">What is PuzzleBox?</h3>
            <p>
              PuzzleBox is a subscription service that delivers a new 3D-printed
              puzzle to your doorstep every month.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">
              How does the subscription work?
            </h3>
            <p>
              Choose a plan, and you'll receive a new puzzle every month, with
              no additional shipping charges!
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Can I cancel anytime?</h3>
            <p>
              Yes, you can cancel or change your subscription at any time with
              no penalties.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--primary)] text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 rebike. Website made by a student for students.</p>
        </div>
      </footer>
    </div>
  );
}
