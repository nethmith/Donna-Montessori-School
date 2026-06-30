import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';

const initialSchools = [
  {
    id: 1,
    name: "Donna Montessori - San Francisco",
    address: "2201 Pine St, San Francisco, CA 94115",
    phone: "(415) 555-0190",
    programs: ["Nido", "Toddler", "Children's House"],
    lat: 37.7892,
    lng: -122.4341,
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
  }
];

// Create custom DOM/CSS-based marker icon to avoid Vite import resolution bugs
const createCustomIcon = () => {
  return L.divIcon({
    html: `<div class="w-8 h-8 bg-[#0EA59A] rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-xs">D</div>`,
    className: 'custom-leaflet-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });
};

const Schools = () => {
  const [schools, setSchools] = useState(initialSchools);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const mapRef = useRef(null);
  const [customIcon, setCustomIcon] = useState(null);

  useEffect(() => {
    // Instantiate icon only on client side
    setCustomIcon(createCustomIcon());
  }, []);

  const handleSearch = () => {
    let filtered = initialSchools;

    if (searchQuery) {
      filtered = filtered.filter(school =>
        school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedProgram) {
      filtered = filtered.filter(school =>
        school.programs.includes(selectedProgram)
      );
    }

    setSchools(filtered);
  };

  const focusSchoolOnMap = (lat, lng) => {
    if (mapRef.current) {
      mapRef.current.setView([lat, lng], 14);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-700 font-sans">
      <Helmet>
        <title>Find a School | Donna Montessori</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#0EA59A] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight mb-4 ">
            Find a school.
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto">
            Discover a Donna Montessori campus near you and schedule a personal tour.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-[30px] shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-4 mb-12">
          <input
            type="text"
            placeholder="Search by city or state..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow bg-slate-100 px-6 py-4 outline-none text-slate-800 rounded-full placeholder-slate-400 font-medium"
          />
          <select
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
            className="bg-slate-100 px-6 py-4 outline-none text-slate-800 rounded-full font-medium cursor-pointer"
          >
            <option value="">All Programs</option>
            <option value="Nido">Nido</option>
            <option value="Toddler">Toddler</option>
            <option value="Children's House">Children's House</option>
          </select>
          <button
            onClick={handleSearch}
            className="bg-[#0EA59A] hover:bg-[#0C948A] text-white px-10 py-4 rounded-full font-bold transition-colors shadow-sm"
          >
            Search
          </button>
        </div>

        {/* Map & Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* School Listings Sidebar */}
          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 lg:col-span-1">
            {schools.length > 0 ? (
              schools.map(school => (
                <div
                  key={school.id}
                  onClick={() => focusSchoolOnMap(school.lat, school.lng)}
                  className="bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col"
                >
                  <div className="h-40 bg-slate-100">
                    <img src={school.image} alt={school.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                      {school.name}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4">
                      {school.address}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {school.programs.map((prog, pIdx) => (
                        <span key={pIdx} className="bg-[#0EA59A]/10 text-[#0EA59A] text-xs px-3 py-1 rounded-full font-semibold">
                          {prog}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center border-t border-slate-50 pt-4">
                      <a href={`tel:${school.phone}`} className="text-sm font-semibold text-slate-500 hover:text-[#0EA59A]">
                        {school.phone}
                      </a>
                      <Link to="/admissions" className="text-sm font-bold text-[#0EA59A] hover:text-[#0C948A]">
                        Schedule Tour &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-12 rounded-[30px] text-center border border-gray-100">
                <p className="text-xl text-slate-400 font-light">No campuses match your criteria.</p>
              </div>
            )}
          </div>

          {/* Leaflet Map Area */}
          <div className="lg:col-span-2 h-[600px] rounded-[40px] overflow-hidden shadow-md border border-gray-100 z-10">
            <MapContainer
              center={[37.8, -96]}
              zoom={4}
              style={{ height: '100%', width: '100%' }}
              ref={mapRef}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {customIcon && schools.map(school => (
                <Marker
                  key={school.id}
                  position={[school.lat, school.lng]}
                  icon={customIcon}
                >
                  <Popup>
                    <div className="text-slate-800 p-1">
                      <h4 className="font-bold text-sm mb-1">{school.name}</h4>
                      <p className="text-xs text-slate-500 mb-2">{school.address}</p>
                      <Link to="/admissions" className="text-xs font-bold text-[#0EA59A] hover:underline">
                        Schedule Tour
                      </Link>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Schools;
