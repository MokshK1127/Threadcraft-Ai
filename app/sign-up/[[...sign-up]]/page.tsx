import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-blue-500 hoverbg-blue-600 text-sm normal-case ",
          },
        }}
      />
    </div>
  );
}
