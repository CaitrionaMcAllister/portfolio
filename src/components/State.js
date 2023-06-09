const State = {
  top: 0,
  pages: 0,
  threshold: 4,
  mouse: [0, 0],
  content: [
    {
      tag: "00",
      text: `The Bacchic\nand Dionysiac\nRites`,
      images: [
        "../websiteImagesHome/img2.jpg",
        "../websiteImagesHome/img2.jpg",
        "../websiteImagesHome/img2.jpg",
      ],
    },
    {
      tag: "01",
      text: `The Elysian\nMysteries`,
      images: [
        "../websiteImagesHome/img2.jpg",
        "../websiteImagesHome/img2.jpg",
        "../websiteImagesHome/img2.jpg",
      ],
    },
    {
      tag: "02",
      text: `The Hiramic\nLegend`,
      images: [
        "../websiteImagesHome/img2.jpg",
        "../websiteImagesHome/img2.jpg",
      ],
    },
  ],
  depthbox: [
    {
      depth: 0,
      color: "#cccccc",
      textColor: "#ffffff",
      text: "In a void,\nno one could say\nwhy a thing\nonce set in motion\nshould stop anywhere.",
      image: "../websiteImagesHome/img2.jpg",
    },
    {
      depth: -5,
      textColor: "#272727",
      text: "For why should it stop\nhere rather than here?\nSo that a thing\nwill either be at rest\nor must be moved\nad infinitum.",
      image: "../websiteImagesHome/img2.jpg",
    },
  ],
  lines: [
    {
      points: [
        [-20, 0, 0],
        [-9, 0, 0],
      ],
      color: "black",
      lineWidth: 0.5,
    },
    {
      points: [
        [20, 0, 0],
        [9, 0, 0],
      ],
      color: "black",
      lineWidth: 0.5,
    },
  ],
};

export default State;
