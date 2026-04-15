import type { ReactNode } from "react";
import type { ComponentType, SVGProps } from "react";
import { Providers } from "~/components/providers";
import { Sparkles, ImageIcon, Zap, Target } from "lucide-react";
import Link from "next/link";

// Correct type for Lucide icons
type LucideIconType = ComponentType<SVGProps<SVGSVGElement>>;

type Feature = {
  icon: LucideIconType;
  text: string;
  color: string;
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  const features: Feature[] = [
    {
      icon: ImageIcon as LucideIconType, // <-- explicit cast
      text: "AI Background Removal",
      color: "bg-emerald-500/20 border-emerald-400/30 text-emerald-300",
    },
    {
      icon: Zap as LucideIconType, // <-- explicit cast
      text: "Lightning Fast Processing",
      color: "bg-amber-500/20 border-amber-400/30 text-amber-300",
    },
    {
      icon: Target as LucideIconType, // <-- explicit cast
      text: "Professional Quality Results",
      color: "bg-purple-500/20 border-purple-400/30 text-purple-300",
    },
  ];

  return (
    <Providers>
      <div className="flex min-h-screen">
        {/* Left Side - Branding */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 lg:flex lg:w-1/2">
          <div className="bg-grid-white/[0.1] absolute inset-0 bg-[size:30px_30px]" />
          <div className="relative z-10 flex flex-col justify-center px-12 xl:px-16">
            <Link href="/" className="mb-12 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/20 backdrop-blur-sm">
                <Sparkles className="h-7 w-7 text-blue-300" />
              </div>
              <span className="text-2xl font-bold text-blue-50">AI Image Editor</span>
            </Link>

            <div className="max-w-md">
              <h1 className="mb-6 text-4xl leading-tight font-bold text-blue-50 xl:text-5xl">
                Transform Images with <span className="text-blue-200">AI Magic</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-blue-100/90">
                Join thousands of creators using advanced AI to edit, enhance, and perfect their images in seconds.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon; // Assign to local variable
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg border backdrop-blur-sm ${feature.color}`}>
                        <Icon className="h-5 w-5" /> {/* Safe usage */}
                      </div>
                      <span className="font-medium text-blue-100">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="flex flex-1 flex-col justify-center bg-gradient-to-br from-slate-50 to-blue-50/30 px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="mb-8 text-center lg:hidden">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent">
                  AI Image Editor
                </span>
              </Link>
            </div>

            <div>{children}</div>

            <p className="mt-6 text-center text-sm text-slate-600">
              Back to{" "}
              <Link href="/" className="font-medium text-blue-600 transition-colors hover:text-blue-500">
                homepage
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Providers>
  );
}