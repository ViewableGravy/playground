import { createLazyRoute } from "@tanstack/react-router";
import { PreviewCard } from "../../../components/tabs/previewCard";

import StockBeanie from '../../../assets/stock/stock_beanie.jpg'
import StockCathedral from '../../../assets/stock/stock_cathedral.jpg'
import StockMountains from '../../../assets/stock/stock_mountains.jpg'
import StockStreet from '../../../assets/stock/stock_street.jpg'
import StockSunset from '../../../assets/stock/stock_sunset.jpg'

const PreviewCardRouteComponent = () => {
  const dimensions = { width: 'auto', height: 300 }

  return (
    <div>
      <h2 style={{ marginBlock: 0, fontSize: 30 }}>Tabbed Preview Card</h2>
      <p style={{ fontSize: 18, color: "#97979b", marginTop: 18 }}>The Tabbed Preview Card provides an easy way to create a banner/carousel component that can display an indicator of the current banner item as well as a contextual title</p>
      <PreviewCard {...dimensions} className="App__Upcoming">
        <PreviewCard.Tab image={StockBeanie} >
          New Contact Page
        </PreviewCard.Tab>
        <PreviewCard.Tab image={StockCathedral}>
          About Me
        </PreviewCard.Tab>
        <PreviewCard.Tab image={StockMountains}>
          Blog Posts
        </PreviewCard.Tab>
        <PreviewCard.Tab image={StockStreet}>
          Some Other Event
        </PreviewCard.Tab>
        <PreviewCard.Tab image={StockSunset}>
          Unrelated Event
        </PreviewCard.Tab>
        <PreviewCard.Tab.Outlet />
      </PreviewCard>
    </div>
  )
}

export const _Route = createLazyRoute("/preview-card")({
  component: PreviewCardRouteComponent
})




