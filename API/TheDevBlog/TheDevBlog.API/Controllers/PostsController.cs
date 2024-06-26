using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheDevBlog.API.Data;
using TheDevBlog.API.Models.DTO;
using TheDevBlog.API.Models.Entities;

namespace TheDevBlog.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        private readonly TheDevBlogDbContext _dbContext;

        public PostsController(TheDevBlogDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPosts()
        {
          var posts =  await _dbContext.Posts.ToListAsync();
          return Ok(posts);
        }

        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetPostById")]
        public async Task<IActionResult> GetPostById(Guid id)
        {
            var post = await _dbContext.Posts.FirstOrDefaultAsync(x => x.Id == id);

            if(post == null)
            {
                return NotFound();
            }

            return Ok(post);
        }

        [HttpPost]
        public async Task<IActionResult> AddPost(AddPostRequest request)
        {
            //convert DTO to Entity
            var post = new Post
            {
                Title = request.Title,
                Content = request.Content,
                Summary = request.Summary,
                UrlHandle = request.UrlHandle,
                FeaturedImageUrl = request.FeaturedImageUrl,
                Visible = request.Visible,
                Author = request.Author,
                PublishDate = request.PublishDate,
                UpdatedDate = request.UpdatedDate
            };

            post.Id = Guid.NewGuid();
            await _dbContext.Posts.AddAsync(post);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPostById), new {id = post.Id}, post);

        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdatePost([FromRoute] Guid id, UpdatePostRequest request)
        {
            //check if exists
            var existingPost = await _dbContext.Posts.FindAsync(id);
            if (existingPost != null)
            {
                existingPost.Title = request.Title;
                existingPost.Content = request.Content;
                existingPost.Summary = request.Summary;
                existingPost.UrlHandle = request.UrlHandle;
                existingPost.FeaturedImageUrl = request.FeaturedImageUrl;
                existingPost.Visible = request.Visible;
                existingPost.Author = request.Author;
                existingPost.PublishDate = request.PublishDate;
                existingPost.UpdatedDate = request.UpdatedDate;

                await _dbContext.SaveChangesAsync();

                return Ok(existingPost);
            }

            return NotFound();

        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeletePost([FromRoute] Guid id)
        {
            //check if exists
            var existingPost = await _dbContext.Posts.FindAsync(id);
            if(existingPost != null)
            {
                _dbContext.Remove(existingPost);
                await _dbContext.SaveChangesAsync();

                return Ok(existingPost);
            }

            return NotFound();
        }

    }
}
