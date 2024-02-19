document.addEventListener('DOMContentLoaded', function() {
    // Get the container for side nav links
    const sideNav = document.getElementById('sideNav');
  
    // Get the contact link in the header
    const contactLink = document.getElementById('contactLink');
  
    // Function to add the contact link to the side nav
    function addContactLink() {
      // Create a new anchor element for the contact link
      const contactNavLink = document.createElement('a');
      contactNavLink.href = '/contact'; // Set the href attribute
      contactNavLink.textContent = 'Contact'; // Set the link text
      contactNavLink.classList.add('sideNavLink'); // Add a class for styling
  
      // Append the contact link to the side nav container
      sideNav.appendChild(contactNavLink);
    }
  
    // Event listener for the contact link in the header
    contactLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
  
      // Check if the contact link is already added
      if (!document.querySelector('.sideNavLink')) {
        addContactLink(); // Add the contact link if not already added
      }
    });
  
    // Event listener to remove the contact link when clicked
    sideNav.addEventListener('click', function(event) {
      // Check if the clicked element is a side nav link
      if (event.target.classList.contains('sideNavLink')) {
        event.target.remove(); // Remove the clicked link
      }
    });
  });
  