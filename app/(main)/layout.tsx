import React from 'react';

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 flex-none">
        {/* Aquí puedes colocar el contenido del sidebar */}
        Sidebar
      </div>
      
      {/* Contenido principal */}
      <div className="flex-1 p-4">
        {/* Aquí se renderizará el contenido pasado como children */}
        {children}
      </div>
    </div>
  );
}

export default HomeLayout;
