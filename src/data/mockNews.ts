import { NewsArticle, NewsCategory } from '../types';

export const categories: NewsCategory[] = [
  { id: '1', name: 'All', slug: 'all' },
  { id: '2', name: 'Technology', slug: 'technology' },
  { id: '3', name: 'Business', slug: 'business' },
  { id: '4', name: 'Sports', slug: 'sports' },
  { id: '5', name: 'Science', slug: 'science' },
  { id: '6', name: 'Health', slug: 'health' },
  { id: '7', name: 'Entertainment', slug: 'entertainment' },
];

export const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Revolutionary AI Breakthrough Changes Everything We Know About Machine Learning',
    description: 'Scientists have developed a new AI system that can learn and adapt in ways previously thought impossible, opening new frontiers in artificial intelligence.',
    content: 'In a groundbreaking development that could reshape the future of artificial intelligence, researchers at leading tech institutions have unveiled a revolutionary AI system that demonstrates unprecedented learning capabilities. This new technology, which combines advanced neural networks with novel algorithmic approaches, represents a significant leap forward in machine learning capabilities. The system can adapt to new situations without extensive retraining, potentially revolutionizing how AI systems are deployed in real-world applications. Industry experts are calling this the most significant AI advancement since the development of deep learning networks.',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'technology',
    author: 'Dr. Sarah Chen',
    publishedAt: '2024-01-15T10:30:00Z',
    source: 'Tech Innovation Daily',
    url: 'https://example.com/ai-breakthrough'
  },
  {
    id: '2',
    title: 'Global Markets Surge as Tech Giants Report Record Earnings',
    description: 'Major technology companies exceeded analyst expectations this quarter, driving significant gains across international stock markets.',
    content: 'Stock markets worldwide experienced substantial gains following the release of quarterly earnings reports from major technology companies. The impressive financial results, which surpassed analyst expectations by significant margins, have renewed investor confidence in the tech sector. Companies reported strong revenue growth driven by increased demand for cloud services, artificial intelligence solutions, and digital transformation initiatives. The positive earnings reports have had a ripple effect across global markets, with tech-heavy indexes leading the charge. Financial analysts are optimistic about the sector\'s continued growth trajectory.',
    imageUrl: 'https://images.pexels.com/photos/8370769/pexels-photo-8370769.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'business',
    author: 'Michael Rodriguez',
    publishedAt: '2024-01-15T08:45:00Z',
    source: 'Financial Times Today',
    url: 'https://example.com/market-surge'
  },
  {
    id: '3',
    title: 'Championship Final Set After Thrilling Semi-Final Matches',
    description: 'Two powerhouse teams advance to the championship final after delivering spectacular performances in yesterday\'s semi-final matches.',
    content: 'Sports fans were treated to an unforgettable evening as two semi-final matches delivered drama, skill, and excitement in equal measure. The first match saw a stunning comeback victory, with the underdog team overturning a two-goal deficit in the final twenty minutes. The second match was equally captivating, featuring world-class athleticism and tactical brilliance from both sides. The championship final promises to be an epic encounter between two teams at the peak of their powers. Tickets for the final sold out within minutes of going on sale, reflecting the enormous anticipation for what many are calling the match of the decade.',
    imageUrl: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'sports',
    author: 'Emma Thompson',
    publishedAt: '2024-01-14T22:15:00Z',
    source: 'Sports Central',
    url: 'https://example.com/championship-final'
  },
  {
    id: '4',
    title: 'New Discovery Could Lead to Breakthrough in Cancer Treatment',
    description: 'Researchers have identified a previously unknown mechanism that cancer cells use to evade the immune system, opening new therapeutic possibilities.',
    content: 'A team of international researchers has made a significant discovery that could revolutionize cancer treatment. The study, published in a prestigious medical journal, reveals a previously unknown mechanism that cancer cells use to evade detection by the immune system. This breakthrough could lead to the development of new immunotherapies that are more effective than current treatments. The research involved years of meticulous laboratory work and collaboration between multiple institutions. Early clinical trials are already being planned to test new therapeutic approaches based on these findings. Medical experts are cautiously optimistic about the potential impact on cancer treatment outcomes.',
    imageUrl: 'https://images.pexels.com/photos/3786215/pexels-photo-3786215.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'science',
    author: 'Dr. James Wilson',
    publishedAt: '2024-01-14T16:20:00Z',
    source: 'Medical Research Today',
    url: 'https://example.com/cancer-breakthrough'
  },
  {
    id: '5',
    title: 'Mental Health Awareness Campaign Launches Nationwide',
    description: 'A comprehensive mental health initiative aims to reduce stigma and improve access to mental health services across the country.',
    content: 'A groundbreaking mental health awareness campaign has been launched nationwide, aiming to address the growing mental health crisis and reduce associated stigma. The initiative, supported by leading healthcare organizations and mental health advocates, includes public education programs, improved access to mental health services, and comprehensive support systems. The campaign features personal stories from individuals who have successfully managed mental health challenges, helping to normalize conversations about mental wellness. Healthcare providers are being trained to better recognize and address mental health issues, while new funding has been allocated to expand mental health services in underserved communities.',
    imageUrl: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'health',
    author: 'Dr. Lisa Martinez',
    publishedAt: '2024-01-14T12:00:00Z',
    source: 'Health & Wellness Weekly',
    url: 'https://example.com/mental-health-campaign'
  },
  {
    id: '6',
    title: 'Streaming Wars Heat Up as New Platform Launches',
    description: 'The entertainment industry sees increased competition as another major streaming service enters the market with exclusive content.',
    content: 'The streaming entertainment landscape has become even more competitive with the launch of a new platform backed by major studios and production companies. The service enters the market with an impressive lineup of exclusive content, including original series, documentaries, and films from renowned creators. Industry analysts predict that this new entrant will intensify the ongoing streaming wars, potentially leading to more competitive pricing and innovative content offerings. The platform has already secured several high-profile exclusives and announced ambitious plans for original programming. Early subscriber numbers indicate strong initial interest, though the long-term success will depend on content quality and user experience.',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'entertainment',
    author: 'Alexandra Kim',
    publishedAt: '2024-01-13T19:30:00Z',
    source: 'Entertainment Weekly',
    url: 'https://example.com/streaming-wars'
  },
  {
    id: '7',
    title: 'Climate Change Solutions: Innovation in Renewable Energy',
    description: 'New solar panel technology promises to dramatically increase energy efficiency while reducing manufacturing costs.',
    content: 'Scientists have developed a revolutionary solar panel technology that could transform the renewable energy landscape. The new panels demonstrate unprecedented efficiency rates while requiring significantly less expensive materials to manufacture. This breakthrough could make solar energy more accessible and cost-effective than ever before. The technology incorporates advanced materials science and innovative manufacturing processes that were previously considered impossible. Energy experts believe this development could accelerate the global transition to renewable energy sources. Several major energy companies have already expressed interest in licensing the technology for commercial production.',
    imageUrl: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'science',
    author: 'Dr. Robert Green',
    publishedAt: '2024-01-13T14:45:00Z',
    source: 'Environmental Science Today',
    url: 'https://example.com/renewable-energy'
  },
  {
    id: '8',
    title: 'Startup Ecosystem Thrives Despite Economic Uncertainty',
    description: 'Venture capital funding remains strong as innovative startups continue to attract significant investment across various sectors.',
    content: 'Despite broader economic uncertainties, the startup ecosystem continues to demonstrate remarkable resilience and growth. Venture capital firms are actively investing in innovative companies across technology, healthcare, and sustainability sectors. This quarter has seen several significant funding rounds, with startups raising substantial capital to fuel their growth and development. Industry experts attribute this continued investment to the quality of emerging technologies and the potential for long-term returns. The startup landscape is particularly vibrant in areas such as artificial intelligence, biotechnology, and clean energy solutions. Many of these companies are addressing critical global challenges while building sustainable business models.',
    imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'business',
    author: 'David Chang',
    publishedAt: '2024-01-13T11:20:00Z',
    source: 'Startup Weekly',
    url: 'https://example.com/startup-ecosystem'
  }
];