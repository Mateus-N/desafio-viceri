using Microsoft.AspNetCore.Mvc;

namespace HeroisApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HeroisController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Oi");
    }
}
