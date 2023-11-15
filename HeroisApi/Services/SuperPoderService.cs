using AutoMapper;
using HeroisApi.Data;
using HeroisApi.Dtos.SuperPoderesDtos;
using HeroisApi.Exceptions;
using HeroisApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace HeroisApi.Services;

public class SuperPoderService(AppDbContext context, IMapper mapper)
{
    private readonly AppDbContext context = context;
    private readonly IMapper mapper = mapper;

    public async Task<ReadSuperPoderesDto> CadastraSuperPoder(CreateSuperPoderesDto createDto)
    {
        SuperPoderes poder = mapper.Map<SuperPoderes>(createDto);
        await context.SuperPoderes.AddAsync(poder);
        await context.SaveChangesAsync();
        return mapper.Map<ReadSuperPoderesDto>(poder);
    }

    public IEnumerable<ReadSuperPoderesDto> BuscarTodos()
    {
        return mapper.Map<IEnumerable<ReadSuperPoderesDto>>(
            context.SuperPoderes.ToList());
    }

    public async Task<ReadSuperPoderesDto> BuscaUm(int id)
    {
        SuperPoderes? poder = await context.SuperPoderes
            .FirstOrDefaultAsync(s => s.Id == id);

        if (poder == null) throw new NotFoundException();

        return mapper.Map<ReadSuperPoderesDto>(poder);
    }
}
