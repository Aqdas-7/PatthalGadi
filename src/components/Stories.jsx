// eslint-disable-next-line no-unused-vars
import React from "react";

// Copy image addresses from Google search
const stories = [
  {
    id: 1,
    title: "Story 1",
    url: "/story1",
    imageUrl:
      "https://images.unsplash.com/photo-1553696719-628fcab87c9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 2,
    title: "Story 2",
    url: "/story2",
    imageUrl:
      "https://images.unsplash.com/photo-1554956742-32f116cf57af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Story 3",
    url: "/story3",
    imageUrl:
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 4,
    title: "Story 4",
    url: "/story4",
    imageUrl:
      "https://images.unsplash.com/photo-1553702446-a39d6fbee6cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 5,
    title: "Story 5",
    url: "/story5",
    imageUrl:
      "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    title: "Story 6",
    url: "/story6",
    imageUrl:
      "https://images.unsplash.com/photo-1554294314-80a5fb7e6bd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTh8fHxlbnwwfHx8fHw%3D",
  },
];

const Stories = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center font-black text-gray-600 sm:text-4xl mb-20">
          Featured Stories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stories.map((story) => (
            <a
              key={story.id}
              href={story.url}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl"
              style={{ paddingBottom: "80%" }}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={story.imageUrl}
                alt={story.title}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2 sm:p-4">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white text-center">
                  {story.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
