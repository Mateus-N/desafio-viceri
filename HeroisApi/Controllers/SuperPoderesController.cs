using HeroisApi.Dtos.SuperPoderesDtos;
using HeroisApi.Exceptions;
using HeroisApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace HeroisApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SuperPoderesController(SuperPoderService service) : ControllerBase
{
    private readonly SuperPoderService service = service;

    [HttpPost]
    public async Task<IActionResult> Post(CreateSuperPoderesDto createDto)
    {
        ReadSuperPoderesDto readDto = await service.CadastraSuperPoder(createDto);
        return CreatedAtAction(nameof(GetOne), new { readDto.Id }, readDto);
    }

    [HttpGet]
    public IActionResult Get()
    {
        IEnumerable<ReadSuperPoderesDto> readDto = service.BuscarTodos();
        return Ok(readDto);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetOne(int id)
    {
        try
        {
            ReadSuperPoderesDto readDto = await service.BuscaUm(id);
            return Ok(readDto);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
        catch (Exception)
        {
            return BadRequest();
        }
    }
}
