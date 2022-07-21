import { mailAPI } from "./Services/MailService";

export async function recoverPassword(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  try {
    mailAPI.post(
      "/send",
      {},
      {
        params: { template: "PasswordRecoveryTemplate" },
      }
    );
  } catch (error) {}
}
