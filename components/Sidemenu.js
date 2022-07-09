import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";

export default function SideMenu() {
  return (
    <aside>
      <button className='sidemenu__close__btn'></button>
      <ul>
        <li>Home</li>
        <li>Werk</li>
        <li>Diensten</li>
        <li>Partners</li>
        <li>Stories</li>
        <li>Vacatures</li>
        <li>Events</li>
        <li>Contact</li>
      </ul>
    </aside>
  );
}
