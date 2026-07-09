import { redirect } from "next/navigation";

type SuccessPageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id: sessionId } = await searchParams;
  const query = sessionId
    ? `?session_id=${encodeURIComponent(sessionId)}`
    : "";

  redirect(`/thankyou${query}`);
}
