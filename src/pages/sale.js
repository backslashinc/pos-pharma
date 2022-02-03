import React from 'react'
import ASide from '../components/aside-navbar'
import SearchItem from '../components/search-item'
import CartItems from '../components/cart-items'
export default function Sale() {
    return (
        <>
        <main className="flex-1 overflow-y-auto">
            {/* Primary column */}
            <section
              aria-labelledby="primary-heading"
              className="bg-[#E8EFF3] min-w-0 flex-1 h-full flex flex-col lg:order-last"
            >
              {/* Your content */}
              <SearchItem />

              {/* Table */}
              <CartItems />
            </section>
          </main>

          {/* Secondary column */}
          <ASide />            
        </>
    )
}
