import type { MetadataRoute } from 'next'
export default function manifest(): MetadataRoute.Manifest { return { name: 'BudgetWise', short_name: 'BudgetWise', description: 'Take control of every rupee.', start_url: '/', display: 'standalone', background_color: '#ffffff', theme_color: '#22a65a', icons: [{ src: '/brand/app-icon.png', sizes: '1024x1024', type: 'image/png' }] } }
