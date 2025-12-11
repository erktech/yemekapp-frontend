import { createSupabaseServerClient } from "../supabase/server";

export async function getActiveRestaurants() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("restaurants")
    .select("id, name, average_rating")
    .eq("is_active", true);

  if (error) throw error;
  return data;
}

export async function getRestaurantById(id: string) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("restaurants")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

export async function getRestaurantMenu(restaurantId: string) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("menu_items")
    .select("*")
    .eq("restaurant_id", restaurantId)
    .eq("is_active", true)
    .order("sort_order");

  if (error) throw error;
  return data;
}
