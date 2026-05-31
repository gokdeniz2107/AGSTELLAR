"use client"

export default function StaticBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Dark background */}
      <div className="absolute inset-0 bg-background" />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34, 197, 94, 0.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/15 via-transparent to-transparent" />
      
      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  )
}
