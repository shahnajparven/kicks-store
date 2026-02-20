import ProductsCard from './ProductsCard'

const Products = () => {
  return (
    <div className='p-4 md:p-8'>
<div className='flex justify-between items-end'>
        <h3 className='text-[24px] md:text-[75px] font-bold text-[#232321] md:uppercase'>Don't miss out<br/> new drops</h3>
        <button className="text-[14px] rounded-lg bg-[#4A69E2] text-white px-4 md:px-6 py-3 md:py-3 hover:bg-[#232321] hover:text-white transition">
              SHOP NEW DROPS
            </button>
    </div>
<ProductsCard/>
</div>

  )
}

export default Products