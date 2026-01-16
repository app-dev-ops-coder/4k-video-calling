"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function HomePage() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const createRoom = () => {
    setIsCreating(true);
    const newRoomId = uuidv4().split("-")[0];
    router.push(`/room/${newRoomId}`);
  };

  const joinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomId.trim()) {
      router.push(`/room/${roomId.trim()}`);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="ai-badge mb-6 mx-auto w-fit">
          <span>✨</span>
          <span>AI-Powered</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">4K Video Calls</span>
          <br />
          <span className="text-white">Reimagined</span>
        </h1>

        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience crystal-clear video conferencing with AI-powered features.
          Background blur, noise cancellation, and real-time transcription — all in stunning 4K.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={createRoom}
            disabled={isCreating}
            className="btn btn-primary text-lg px-8 py-4"
          >
            {isCreating ? (
              <>
                <div className="loading-spinner" style={{ width: 20, height: 20, borderWidth: 2 }} />
                Creating...
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15.5 10l4.5 2-4.5 2M12 6v12M4 9v6" />
                  <circle cx="4" cy="6" r="2" />
                  <circle cx="12" cy="6" r="2" />
                  <circle cx="12" cy="18" r="2" />
                  <circle cx="4" cy="18" r="2" />
                  <circle cx="20" cy="12" r="2" />
                </svg>
                Create New Room
              </>
            )}
          </button>
        </div>

        {/* Join Room Form */}
        <form onSubmit={joinRoom} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter room code to join..."
            className="input flex-1"
          />
          <button
            type="submit"
            className="btn btn-secondary whitespace-nowrap"
            disabled={!roomId.trim()}
          >
            Join Room
          </button>
        </form>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
        <FeatureCard
          icon="🎬"
          title="4K Ultra HD"
          description="Crystal-clear video quality up to 3840x2160 resolution with adaptive bitrate streaming."
        />
        <FeatureCard
          icon="🤖"
          title="AI Background Blur"
          description="Real-time AI-powered background blur and virtual backgrounds using advanced ML models."
        />
        <FeatureCard
          icon="🎙️"
          title="Noise Cancellation"
          description="AI noise suppression eliminates background noise for crystal-clear audio."
        />
        <FeatureCard
          icon="📝"
          title="Live Transcription"
          description="Real-time speech-to-text transcription with speaker identification."
        />
        <FeatureCard
          icon="🔒"
          title="End-to-End Encryption"
          description="Your calls are secured with industry-standard encryption protocols."
        />
        <FeatureCard
          icon="🌐"
          title="No Downloads"
          description="Works directly in your browser. No plugins or installations required."
        />
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-zinc-500 text-sm">
        <p>Built with WebRTC • Powered by AI • No account required</p>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card card-hover glass">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
