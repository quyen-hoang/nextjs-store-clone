import { createClient } from "@supabase/supabase-js";

const bucket = "main-bucket";

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const uploadImage = async (image: File) => {
    const timestamp = Date.now();
    const newName = `${timestamp}-${image.name}`;
    const { data, error } = await supabase.storage
        .from(bucket)
        .upload(newName, image, { cacheControl: "3600" });
    if (!data) throw new Error("Image upload failed");
    return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
