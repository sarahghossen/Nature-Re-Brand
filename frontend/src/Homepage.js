import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Homepage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        In a world that is becoming more impersonal and stressful, we offer our
        customers a friendly place where you will find a great selection of pet
        products and a friendly and helpful staff. To serve you better, we have
        7 branches in the greater Montreal and Laval area, with a wide selection
        of products, accessories and foods, not only for dogs and cats, but also
        for small animals, birds, reptiles and fish ! We also believe that we
        have a responsibility towards our community. Indeed, we are sad to see
        the number of abandoned dogs and cats that are euthanized every day.
        That's why we took the initiative to focus on adoption and to help
        rescues and shelters in our community and beyond, to find families for
        the thousands of abandoned and unwanted animals. Come visit us at one of
        Nature Pet Centers and let us help you take care of your new family
        member.
      </p>
      <div>
        <img />
        <h2>Our Story</h2>
        <p>something</p>
        <button>Read more</button>
      </div>
      <h2>Something something</h2>
      <div>
        <img />
        <h2>Adopt</h2>
        <p>something</p>
        <button>Read more</button>
      </div>
      <div>
        <img />
        <h2>Donate</h2>
        <p>something</p>
        <button>Read more</button>
      </div>
      <div>
        <h2>Subscribe To Our Mailing List For The Lastest News!</h2>
        <form>
          <input type="email" placeholder="Email Address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
