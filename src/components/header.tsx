import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";

const Header = async () => {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <header>
      <nav>
        <ul>
          {settings.data.navigation.map(({ link_label, link }) => (
            <li key={link_label}>
              <PrismicLink field={link}>{link_label}</PrismicLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
