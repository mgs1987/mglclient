import ContactList from "../../contactList/ContactList";

export default function DashBoard() {
  return (
    <>
      <div className="mt-12 text-center flex justify-center max-w-screen-2xl lg:w-[100vw]">
        <ContactList />
      </div>
    </>
  );
}
