import Card from "./Card";

const products = [
  {
    id: 1,
    title: "Make Up Essentials",
    passage1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    passage2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: [
      { url: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
      { url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" }
    ]
  },
  {
    id: 2,
    title: "Luxury Lipsticks",
    passage1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    passage2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: [
      { url: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
      { url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" }
    ]
  },
  {
    id: 3,
    title: "Face Care Kit",
    passage1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    passage2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: [
      { url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" },
      { url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
      { url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" }
    ]
  },
  
  
];


export default function Review() {
  const loading= false;
  return (
    <div className="container mx-auto px-4 py-10">
  
<h2 className="text-[#232321] text-[24px] md:text-[74px] font-bold py-4">
          REVIEWS
        </h2>
 
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 py-4">
  {products.map((product) => (
    <Card key={product.id} product={product} />
  ))}
</div>
 
</div>

  );
}
