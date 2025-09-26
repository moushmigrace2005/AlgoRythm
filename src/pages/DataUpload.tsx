import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Upload, File, CircleCheck as CheckCircle, CircleAlert as AlertCircle, Camera, Database, ChartBar as BarChart3, Cloud, X, FileImage, FileSpreadsheet, Loader as Loader2 } from 'lucide-react';

const DataUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [processingStatus, setProcessingStatus] = useState<{ [key: string]: string }>({});
  const [dragActive, setDragActive] = useState(false);
  const [activeTab, setActiveTab] = useState('hyperspectral');

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    files.forEach((file) => {
      const fileId = Date.now() + Math.random();
      const newFile = {
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type,
        uploadProgress: 0,
        status: 'uploading'
      };
      
      setUploadedFiles(prev => [...prev, newFile]);
      
      // Simulate upload progress
      simulateUpload(fileId);
    });
  };

  const simulateUpload = (fileId: number) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setUploadedFiles(prev => 
          prev.map(file => 
            file.id === fileId 
              ? { ...file, uploadProgress: 100, status: 'processing' }
              : file
          )
        );
        
        // Start processing
        setTimeout(() => {
          setUploadedFiles(prev => 
            prev.map(file => 
              file.id === fileId 
                ? { ...file, status: 'completed' }
                : file
            )
          );
        }, 3000 + Math.random() * 2000);
      } else {
        setUploadedFiles(prev => 
          prev.map(file => 
            file.id === fileId 
              ? { ...file, uploadProgress: progress }
              : file
          )
        );
      }
    }, 200);
  };

  const removeFile = (fileId: number) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'csv':
      case 'xlsx':
      case 'xls':
        return <FileSpreadsheet className="h-8 w-8 text-green-500" />;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'tiff':
        return <FileImage className="h-8 w-8 text-blue-500" />;
      default:
        return <File className="h-8 w-8 text-gray-500" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'uploading':
        return <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />;
      case 'processing':
        return <Loader2 className="h-4 w-4 text-orange-500 animate-spin" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const tabs = [
    { id: 'hyperspectral', name: 'Hyperspectral Data', icon: Camera },
    { id: 'sensor', name: 'Sensor Data', icon: Database },
    { id: 'batch', name: 'Batch Upload', icon: Upload }
  ];

  return (
    <div className="min-h-screen pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Data Upload Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload hyperspectral cubes, sensor data, and other agricultural datasets 
            for AI-powered analysis and insights
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Upload Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div
            className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-colors ${
              dragActive 
                ? 'border-green-400 bg-green-50' 
                : 'border-gray-300 bg-white/50 backdrop-blur-sm hover:border-green-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              multiple
              onChange={handleFileInput}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept={activeTab === 'hyperspectral' ? '.hsi,.tiff,.img' : '.csv,.xlsx,.json'}
            />
            
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-full">
                <Upload className="h-12 w-12 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {dragActive ? 'Drop files here' : 'Drag & drop your files here'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {activeTab === 'hyperspectral' 
                    ? 'Support for .HSI, .TIFF, .IMG formats'
                    : 'Support for .CSV, .XLSX, .JSON formats'
                  }
                </p>
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Browse Files
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Processing Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Camera className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Hyperspectral Analysis</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• NDVI & CVI calculation</li>
              <li>• Spectral band analysis</li>
              <li>• Anomaly detection</li>
              <li>• Health mapping</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Data Processing</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Real-time analysis</li>
              <li>• Pattern recognition</li>
              <li>• Trend identification</li>
              <li>• Report generation</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Cloud className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Cloud Storage</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Secure data storage</li>
              <li>• Automatic backups</li>
              <li>• Version control</li>
              <li>• Team collaboration</li>
            </ul>
          </div>
        </motion.div>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-8"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Upload Progress</h2>
            <div className="space-y-4">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    {getFileIcon(file.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                    <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                    {file.status === 'uploading' && (
                      <div className="mt-2">
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${file.uploadProgress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(file.status)}
                    <span className="text-sm text-gray-600 capitalize">{file.status}</span>
                    <button
                      onClick={() => removeFile(file.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Guidelines</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Maximum file size: 500MB per file</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Supported formats: HSI, TIFF, IMG, CSV, XLSX, JSON</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Include metadata when possible for better analysis</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Batch uploads supported for multiple datasets</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Security</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>End-to-end encryption during transfer</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Secure cloud storage with redundancy</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>GDPR compliant data handling</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Your data remains private and secure</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataUpload;