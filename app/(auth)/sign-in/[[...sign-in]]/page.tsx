import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <SignIn
        appearance={{
          theme: "simple",
          variables: {
            colorPrimary: "#ff4d00",
          },
        }}
      />
    </div>
  )
}