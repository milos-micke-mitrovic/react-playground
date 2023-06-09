import * as htmlToImage from "html-to-image";

export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const randomNumber = (max: number, min: number): string =>
  Math.floor(Math.random() * (max - min + 1) + min).toString();

export const downloadDiv = (title: string, element: HTMLElement) => {
  htmlToImage
    .toPng(element)
    .then(function (dataUrl) {
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = title;
      document.body.appendChild(a);
      a.click();
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
};
