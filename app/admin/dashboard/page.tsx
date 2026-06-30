import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (!session || session.value !== "secure_token_123") {
    redirect("/admin");
  }

  return (
    <main className="pt-200 pb-200 bg--white min-vh-100">
      <div className="container">
        <h1 className="title title--l color--dark">Admin Dashboard</h1>
        <div className="txt txt--m color--dark-secondary mt-24">
          <p>Welcome to the secure Catalyr admin area. You are authenticated.</p>
        </div>
        <form action={async () => {
          'use server'
          const cookieStore = await cookies();
          cookieStore.delete("admin_session");
          redirect("/admin");
        }}>
          <button type="submit" className="btn btn--orange mt-32">
            <span><b>Logout</b></span>
          </button>
        </form>
      </div>
    </main>
  );
}
