interface Skills {
    src: string;
  }
  
  export default async function getSkills() {
    try {
      const response = await fetch("http://localhost:8000/skills", {
        method: "GET",
        cache: "no-store",
      })
      const data: Skills[] = await response.json();
      return data
    } catch (error) {
      console.error("Error fetching skills:", error);
      return []
    }
  }