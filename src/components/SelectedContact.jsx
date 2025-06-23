import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  if (!contact) return <p>Loading contact details...</p>;

  return (
    <div>
      <h2>{contact.name}'s Details</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Username: {contact.username}</p>
      <p>Website: {contact.website}</p>
      <p>Company: {contact.company?.name}</p>
      <p>Address: {contact.address?.street}, {contact.address?.city}</p>
      <button onClick={() => setSelectedContactId(null)}>Back to List</button>
    </div>
  );
}
