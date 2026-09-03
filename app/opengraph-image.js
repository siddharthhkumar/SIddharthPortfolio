import { ImageResponse } from 'next/og'

/**
 * The share card.
 *
 * Generated rather than exported from a design file, so it can never drift
 * from the site: same warm paper, same ink red, same sentence. No photograph
 * — at 1200×630 in a message preview, a name and a claim read better than a
 * face does.
 */
export const alt = 'Siddharth Kumar — data, product and research'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f2ece1',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 21,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#7d7565',
          }}
        >
          <span>Siddharth Kumar</span>
          <span>Noida, India</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.02, color: '#1c1a16', letterSpacing: -4 }}>
            I figure out
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.02,
              color: '#2f4fa8',
              letterSpacing: -4,
            }}
          >
            what to build.
          </div>
          <div
            style={{
              fontSize: 27,
              lineHeight: 1.4,
              color: '#4a453c',
              paddingTop: 22,
              maxWidth: 860,
            }}
          >
            Product and operations. Led a four-person build end to end, ran the KPIs and
            dashboards for a logistics operation, and a ten-person team for a hackathon.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 30,
            paddingTop: 26,
            borderTop: '1px solid rgba(28,26,22,0.22)',
            fontSize: 22,
            color: '#4a453c',
          }}
        >
          <span>Product</span>
          <span style={{ color: '#b03623' }}>·</span>
          <span>Operations</span>
          <span style={{ color: '#b03623' }}>·</span>
          <span>Data</span>
          <span style={{ color: '#b03623' }}>·</span>
          <span>Research</span>
        </div>
      </div>
    ),
    size
  )
}
