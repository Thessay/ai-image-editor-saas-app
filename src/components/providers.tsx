"use client"

import { AuthUIProvider } from "@daveyplate/better-auth-ui"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import type { ReactNode } from "react"

import { authClient } from "~/lib/auth-client"

export function Providers({ children }: { children: ReactNode }) {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <AuthUIProvider
            authClient={authClient}
            navigate={(path) => router.push(path)}
            replace={(path) => router.replace(path)}
            // Changed from (session) => ... to () => ...
            onSessionChange={async () => {
                try {
                    const { data: session } = await authClient.getSession()

                    // 1. Refresh server data
                    router.refresh()

                    // 2. Handle the redirect logic
                    if (session && pathname.startsWith("/auth")) {
                        router.replace("/dashboard")
                    }
                } catch (error) {
                    console.error("Error during session change:", error)
                }
            }}
            Link={Link}
        >
            {children}
        </AuthUIProvider>
    )
}