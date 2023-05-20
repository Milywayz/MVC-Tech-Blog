// Retrieving comments inputs
const newCommentHandler = async (event) => {
    event.preventDefault();
    let projectid = event.target.dataset.projectId
    console.log(projectid)
    const description = document.querySelector('#project-desc').value.trim();
  
    if (description) {
      const response = await fetch(`/api/projects/comment/${projectid}`, {
        method: 'POST',
        body: JSON.stringify({description}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  console.log(response)
      if (response.ok) {
        document.location.replace(`/project/${projectid}`);
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  // Deleting comments inputs
  const delButtonHandler = async (event) => {
    event.preventDefault();
      let commentid = event.target.dataset.commentId
      let projectid = document.querySelector('#createButton').dataset.projectId
  
      const response = await fetch(`/api/projects/comment/${commentid}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace(`/project/${projectid}`);
      } else {
        alert('Failed to delete project');
      }
    
  };
  
  document
    .querySelector('#createButton')
    .addEventListener('click', newCommentHandler);
  
  document
    .querySelectorAll('.deleteButton').forEach(element =>{
      element.onclick = delButtonHandler
    })
  