using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HeroisApi.Migrations
{
    /// <inheritdoc />
    public partial class final2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MyProperty",
                table: "SuperPoderes",
                newName: "Descricao");

            migrationBuilder.CreateIndex(
                name: "IX_Herois_NomeHeroi",
                table: "Herois",
                column: "NomeHeroi",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Herois_NomeHeroi",
                table: "Herois");

            migrationBuilder.RenameColumn(
                name: "Descricao",
                table: "SuperPoderes",
                newName: "MyProperty");
        }
    }
}
