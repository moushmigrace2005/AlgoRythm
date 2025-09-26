import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChartBar as BarChart3, Activity, Droplets, ThermometerSun, TriangleAlert as AlertTriangle, TrendingUp, Download, RefreshCw, MapPin, Leaf, Bug, Calendar } from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

const Dashboard = () => {
  const [selectedZone, setSelectedZone] = useState('Zone A');
  const [timeRange, setTimeRange] = useState('7d');

  // Sample data for charts
  const ndviData = [
    { date: '2025-01-01', value: 0.65, temperature: 22, moisture: 45 },
    { date: '2025-01-02', value: 0.68, temperature: 24, moisture: 42 },
    { date: '2025-01-03', value: 0.71, temperature: 26, moisture: 38 },
    { date: '2025-01-04', value: 0.69, temperature: 25, moisture: 40 },
    { date: '2025-01-05', value: 0.73, temperature: 27, moisture: 36 },
    { date: '2025-01-06', value: 0.76, temperature: 28, moisture: 34 },
    { date: '2025-01-07', value: 0.74, temperature: 26, moisture: 38 }
  ];

  const zoneHealthData = [
    { name: 'Healthy', value: 65, color: '#22C55E' },
    { name: 'Stressed', value: 25, color: '#F59E0B' },
    { name: 'Critical', value: 10, color: '#EF4444' }
  ];

  const soilData = [
    { parameter: 'pH', value: 6.8, optimal: '6.5-7.0', status: 'Good' },
    { parameter: 'Moisture', value: 38, optimal: '35-45%', status: 'Good' },
    { parameter: 'Temperature', value: 26, optimal: '20-28°C', status: 'Good' },
    { parameter: 'Nitrogen', value: 45, optimal: '40-60ppm', status: 'Good' },
    { parameter: 'Phosphorus', value: 25, optimal: '20-40ppm', status: 'Good' },
    { parameter: 'Potassium', value: 180, optimal: '150-250ppm', status: 'Good' }
  ];

  const alerts = [
    { id: 1, type: 'warning', message: 'Possible fungal infection detected in Zone B', zone: 'Zone B', time: '2 hours ago' },
    { id: 2, type: 'info', message: 'Irrigation recommended for Zone C', zone: 'Zone C', time: '4 hours ago' },
    { id: 3, type: 'success', message: 'Pest treatment successful in Zone A', zone: 'Zone A', time: '1 day ago' },
    { id: 4, type: 'warning', message: 'Low nitrogen levels detected in Zone D', zone: 'Zone D', time: '2 days ago' }
  ];

  const recommendations = [
    { id: 1, category: 'Irrigation', action: 'Increase watering frequency in Zone C by 15%', priority: 'High', impact: '+12% yield' },
    { id: 2, category: 'Nutrition', action: 'Apply nitrogen fertilizer to Zone D', priority: 'Medium', impact: '+8% growth' },
    { id: 3, category: 'Pest Control', action: 'Monitor aphid population in Zone B', priority: 'Low', impact: 'Prevention' },
    { id: 4, category: 'Soil Health', action: 'Test soil pH in southeastern quadrant', priority: 'Medium', impact: '+5% efficiency' }
  ];

  const zones = ['Zone A', 'Zone B', 'Zone C', 'Zone D'];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'info': return <Droplets className="h-4 w-4 text-blue-500" />;
      case 'success': return <Leaf className="h-4 w-4 text-green-500" />;
      default: return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Farm Control Center
              </h1>
              <p className="text-gray-600">
                Real-time monitoring and AI-powered insights for your agricultural operations
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {zones.map((zone) => (
                  <option key={zone} value={zone}>{zone}</option>
                ))}
              </select>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2">
                <RefreshCw className="h-4 w-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {[
            { title: 'Overall Health', value: '74%', change: '+5.2%', icon: Activity, color: 'text-green-500' },
            { title: 'Soil Moisture', value: '38%', change: '-2.1%', icon: Droplets, color: 'text-blue-500' },
            { title: 'Temperature', value: '26°C', change: '+1.3°', icon: ThermometerSun, color: 'text-orange-500' },
            { title: 'Active Alerts', value: '3', change: '-2', icon: AlertTriangle, color: 'text-red-500' }
          ].map((metric, index) => (
            <div key={metric.title} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-gray-50 ${metric.color}`}>
                  <metric.icon className="h-6 w-6" />
                </div>
                <span className={`text-sm font-medium ${
                  metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Spectral Health Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Spectral Health Map</h2>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">{selectedZone}</span>
              </div>
            </div>
            
            {/* Health Map Visualization */}
            <div className="relative mb-6">
              <div className="bg-gradient-to-br from-green-400 via-yellow-400 to-red-400 h-64 rounded-xl opacity-80 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-lg font-semibold">Interactive Field Map</p>
                  <p className="text-sm opacity-90">Color-coded health zones</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 rounded bg-green-500"></div>
                    <span>Healthy</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 rounded bg-yellow-500"></div>
                    <span>Stressed</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 rounded bg-red-500"></div>
                    <span>Critical</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Zone Health Distribution */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Health Distribution</h3>
                <ResponsiveContainer width="100%" height={120}>
                  <PieChart>
                    <Pie
                      data={zoneHealthData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {zoneHealthData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {zoneHealthData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded`} style={{ backgroundColor: item.color }}></div>
                      <span className="text-gray-600">{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Alerts Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Active Alerts</h2>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                {alerts.filter(a => a.type === 'warning').length} urgent
              </span>
            </div>
            
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-4 bg-gray-50 rounded-xl border-l-4 border-orange-400">
                  <div className="flex items-start space-x-3">
                    {getAlertIcon(alert.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">{alert.zone}</span>
                        <span className="text-xs text-gray-400">{alert.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trend Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Trend Analysis</h2>
            <div className="flex items-center space-x-2">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* NDVI Trends */}
            <div>
              <h3 className="font-medium text-gray-900 mb-4 flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>NDVI Index</span>
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={ndviData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#22C55E" 
                    fill="#22C55E" 
                    fillOpacity={0.3} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Environmental Conditions */}
            <div>
              <h3 className="font-medium text-gray-900 mb-4 flex items-center space-x-2">
                <ThermometerSun className="h-4 w-4 text-orange-500" />
                <span>Environmental Conditions</span>
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={ndviData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="temperature" 
                    stroke="#F59E0B" 
                    strokeWidth={2}
                    name="Temperature (°C)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="moisture" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    name="Moisture (%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Soil Summary & AI Recommendations */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Soil Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Soil Analysis Summary</h2>
            <div className="space-y-4">
              {soilData.map((item) => (
                <div key={item.parameter} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <h3 className="font-medium text-gray-900">{item.parameter}</h3>
                    <p className="text-sm text-gray-600">Optimal: {item.optimal}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">{item.value}</p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Recommendations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">AI Recommendations</h2>
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div key={rec.id} className="p-4 bg-gray-50 rounded-xl border-l-4 border-green-400">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                      {rec.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(rec.priority)}`}>
                      {rec.priority}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 mb-1">{rec.action}</p>
                  <p className="text-xs text-gray-600">Expected impact: {rec.impact}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
            <Download className="h-5 w-5" />
            <span>Download Report</span>
          </button>
          <button className="bg-white text-green-600 border-2 border-green-500 px-6 py-3 rounded-xl hover:bg-green-50 transition-colors flex items-center justify-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Schedule Analysis</span>
          </button>
          <button className="bg-white text-gray-600 border-2 border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
            <Bug className="h-5 w-5" />
            <span>Pest Monitoring</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;