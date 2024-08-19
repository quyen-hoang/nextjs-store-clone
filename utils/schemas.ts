import { z, ZodSchema } from "zod";

export const productSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: "name must be at least 2 characters.",
        })
        .max(100, {
            message: "name must be less than 100 characters.",
        }),
    company: z.string(),
    featured: z.coerce.boolean(),
    price: z.coerce.number().int().min(0, {
        message: "price must be a positive number.",
    }),
    description: z.string().refine(
        (description) => {
            const wordCount = description.split(" ").length;
            return wordCount >= 10 && wordCount <= 1000;
        },
        {
            message: "description must be between 10 and 1000 words.",
        }
    ),
});

export function validatedWithZodSchema<T>(
    schema: ZodSchema<T>,
    data: unknown
): T {
    const result = schema.safeParse(data);
    if (!result.success) {
        const error = result.error.errors.map((error) => error.message);
        throw new Error(error.join(","));
    }

    return result.data;
}

export const imageSchema = z.object({
    image: validatedImageFile(),
});

function validatedImageFile() {
    const maxUploadSize = 1024 * 1024;
    const acceptedFileType = ["image/"];

    return z
        .instanceof(File)
        .refine((file) => {
            return !file || file.size <= maxUploadSize;
        }, `File size must be less than 1MB`)
        .refine((file) => {
            return (
                !file ||
                acceptedFileType.some((type) => file.type.startsWith(type))
            );
        }, `File must be an image`);
}
