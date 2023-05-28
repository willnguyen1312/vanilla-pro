import { TreeNodeType, Data } from "./types";

export const sampleData: Data = [
  {
    name: "Comedy",
    items: ["MP4", "AVI", "MKV"],
  },
  {
    name: "Evidence",
    items: ["Image", "Video"],
  },
  {
    name: "Devices",
    items: ["AB3", "AB2", "Taser"],
  },
  {
    name: "AB3",
    items: ["AB3 1", "AB3 2"],
  },
  {
    name: "Image",
    items: ["JPEG"],
  },
  {
    name: "JPEG",
    items: ["JPEG 1"],
  },
];

export const sampleDataTree: TreeNodeType[] = [
  {
    isActive: true,
    label: "Romantic",
    children: [
      {
        label: "Titanic",
        children: [
          {
            label: "Titanic 1",
          },
          {
            label: "Titanic 2",
          },
        ],
      },
      {
        label: "Love Actually",
        children: [],
      },
      {
        label: "The Notebook",
        children: [],
      },
    ],
  },
  {
    label: "Series",
    children: [
      {
        label: "Friends",
        children: [
          {
            label: "Friends 1",
          },
        ],
      },
      {
        label: "Modern Family",
        children: [
          {
            label: "Modern Family 1",
          },
        ],
      },
    ],
  },
  {
    label: "Comedy",
    children: [
      {
        label: "MR Bean",
        children: [
          {
            label: "MR Bean 1",
          },
        ],
      },
    ],
  },
];
