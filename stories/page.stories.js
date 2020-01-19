import React from "react";
import Page from "../src/page/page";

export default {
  title: "Page",
  component: Page
};

const theme = {
  header: {
    backgroundColor: "red"
  },
  title: {
    color: "white"
  },
  backButton: {
    backgroundColor: "red",
    color: "white"
  }
};
export const emptyPage = () => <Page theme={theme}></Page>;

export const withContent = () => (
  <Page title={"Title"} theme={theme}>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo dignissimos
      maiores sunt ad et amet eius quas, magni corrupti labore nobis delectus
      corporis minima sapiente illo nam. Earum dicta, labore sit quidem dolores
      iure, asperiores facilis temporibus accusantium veniam est nihil? Fugit
      quia non nemo. Exercitationem voluptatem, sed autem aliquid doloremque
      similique repudiandae. Tempora, odit dolor! Repudiandae praesentium
      suscipit dignissimos, quibusdam minus assumenda veniam, est temporibus
      deserunt in alias aliquid, accusantium itaque commodi similique voluptates
      eveniet omnis nesciunt beatae error qui officiis. Doloribus, vero neque
      distinctio eius quidem voluptatibus consequatur soluta explicabo,
      asperiores iure molestias praesentium aliquid voluptate, pariatur atque!
    </p>
  </Page>
);
