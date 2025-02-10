import zod from "zod";

const envSchema = zod.object({
  RESEND_API_KEY: zod.string().nonempty(),
});

export const env = envSchema.parse(process.env);
