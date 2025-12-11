import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function TestSupabase2() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("restaurants")
    .select("id, name")
    .limit(5);

  return (
    <pre className="p-4 bg-gray-800 text-white">
      {JSON.stringify({ data, error }, null, 2)}
    </pre>
  );
}
