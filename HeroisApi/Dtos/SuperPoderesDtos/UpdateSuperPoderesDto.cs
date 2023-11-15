namespace HeroisApi.Dtos.SuperPoderesDtos;

public record UpdateSuperPoderesDto
{
    public int Id { get; set; }
    public required string SuperPoder { get; set; }
    public string? Descricao { get; set; }
}
