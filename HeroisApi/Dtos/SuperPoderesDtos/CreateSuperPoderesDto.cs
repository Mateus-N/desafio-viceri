namespace HeroisApi.Dtos.SuperPoderesDtos;

public record CreateSuperPoderesDto
{
    public required string SuperPoder { get; set; }
    public string? Descricao { get; set; }
}
